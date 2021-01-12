# GitLab CI/CD

Die **GitLab CI/CD** wird durch eine Datei namens `.gitlab-ci.yml` konfiguriert, die im Root-Verzeichnis des Repositorys abgelegt wird.
Diese Datei erstellt eine Pipeline, die für Änderungen am Code im Repository ausgeführt wird. Pipelines bestehen aus einer oder mehreren
Stufen (stage), die der Reihe nach ablaufen, und können jeweils einen oder mehrere Jobs (script) enthalten, die parallel laufen. Diese Jobs
werden durch den GitLab Runner-Agent ausgeführt.

## Beispiele/Vorlagen

**Beispiel 1: Docker Images** \
Der Job `publish:tag:docker` wird in der Phase `publish` ausgeführt und erbt durch das `extends` von dem Job `.publish:tag:docker`:

```yaml
publish:tag:docker:
    stage: publish
    extends: .publish:tag:docker
```

**Beispiel 2: Sentry** \
Die Jobs werden in der Phase `postdeploy` ausgeführt, sobald der angegebene Job unter `needs` abgeschlossen ist. Für **Sentry** werden folgende
Jobs in der `.gitlab-ci.yml` des jeweiligen Microservices benötigt:

```yaml
sentry:release:stable:
  stage: postdeploy
  needs:
    - publish:stable:docker
  rules:
    - if: '$CI_COMMIT_TAG != null && $CI_COMMIT_TAG =~ /^v[0-9]+(\.[0-9]+){2,3}$/'
      when: on_success
  extends:
    - .sentry:release
sentry:release:tag:
  stage: postdeploy
  needs:
    - publish:tag:docker
  rules:
    - if: '$CI_COMMIT_TAG != null && $CI_COMMIT_TAG =~ /^v[0-9]+(\.[0-9]+){2,3}-.+$/'
      when: on_success
  extends:
    - .sentry:release
sentry:deploy:dev:
  stage: postdeploy
  needs:
    - deploy:dev:kubernetes
  extends:
    - .sentry:deploy:dev
sentry:deploy:prod:
  stage: postdeploy
  needs:
    - deploy:tag:prod:kubernetes
  extends:
    - .sentry:deploy:prod
```

## Generelles

### Jobs

Die Pipeline-Konfiguration beginnt mit Jobs. Jobs sind das grundlegendste Element einer `.gitlab-ci.yml`-Datei.

```yaml
job1:
    script: "execute-script-for-job1"

job2:
    script: "execute-script-for-job2"
```

### Umgebungsvariablen

#### image

Wird verwendet, um ein Docker-Image anzugeben, das für den Job verwendet werden soll.

```yaml
image: gitlab-registry.mittwald.it/coab-0x7e7/tools/project-base
```

#### script

`script` ist das einzige erforderliche Schlüsselwort, das ein Job benötigt. Es handelt sich um ein Shell-Skript, das vom Runner ausgeführt
wird.

```yaml
job1:
    script:
        - execute-script-for-job1
        - execute-another-script-for-job1
```

#### stage

`stage` wird pro Job definiert und stützt sich auf stages, die global definiert werden. Es ermöglicht die Gruppierung von Jobs in
verschiedene Phasen, wobei Jobs derselben Phase parallel ausgeführt werden (unter bestimmten Bedingungen).

```yaml
stages:
    - build
    - test
    - deploy

job 0:
    stage: .pre
    script: make something useful before build stage

job 1:
    stage: build
    script: make build dependencies

job 2:
    stage: build
    script: make build artifacts

job 3:
    stage: test
    script: make test

job 4:
    stage: deploy
    script: make deploy

job 5:
    stage: .post
    script: make something useful at the end of pipeline
```

#### extends

`extends` definiert Einträge, von denen ein Job, der `extends` verwendet, erbt.

```yaml
.tests:
    script: make something wonderful
    stage: test
    only:
        refs:
            - branches

job:
    extends: .tests
    script: make something
    only:
        variables:
            - $SMTHNG
```

Im obigen Beispiel erbt der `job` von der `.test`-Vorlage. GitLab führt basierend auf den Keys einen reverse deep merge durch.

-   Die `job`-Inhalte werden rekursiv in `.tests` zusammengeführt.
-   Die Werte der Keys werden nicht zusammengeführt.

Das Ergebnis ist dieser Job, bei dem das `script` überschrieben wird:

```yaml
job:
    script: make something
    only:
        variables:
            - $SMTHNG
        refs:
            - branches
```

#### needs

`needs` ermöglicht die Ausführung von Jobs, die nicht in der richtigen Reihenfolge ausgeführt werden.

Dadurch können einige Jobs ausgeführt werden, ohne auf andere warten zu müssen und ohne auf die Reihenfolge der `stages` zu achten, sodass
mehrere `stages` gleichzeitig ausgeführt werden können.

```yaml
linux:build:
    stage: build

mac:build:
    stage: build

lint:
    stage: test
    needs: []

linux:rspec:
    stage: test
    needs: ["linux:build"]

linux:rubocop:
    stage: test
    needs: ["linux:build"]

mac:rspec:
    stage: test
    needs: ["mac:build"]

mac:rubocop:
    stage: test
    needs: ["mac:build"]

production:
    stage: deploy
```

In diesem Beispiel werden vier Ausführungspfade erstellt:

**Linter**: Der `lint` Job läuft sofort, ohne auf den Abschluss des `build` stage zu warten, da er keine `needs` hat (`needs: []`).

**Linux-Pfad**: Der `linux:rspec` und `linux:rubocop` Job wird ausgeführt, sobald der `linux:build` Job abgeschlossen ist, ohne auf die
Fertigstellung von `mac:build` zu warten.

**macOS-Pfad**: Die Jobs `mac:rspec` und `mac:rubocop` werden ausgeführt, sobald der Job `mac:build` beendet ist, ohne auf die Beendigung
von `linux:build` zu warten.

**Production**: Der `production` Job wird ausgeführt, sobald alle vorherigen Jobs beendet sind; in diesem Fall: `linux:build`,
`linux:rspec`, `linux:rubocop`, `mac:build`, `mac:rspec`, `mac:rubocop`.
