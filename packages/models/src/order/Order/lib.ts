export const getRecommendedStorage = (hardwareSpecs: string) => {
  switch (hardwareSpecs) {
    case "space-server.128cpu-dedicated.256gb-ram":
      return "2000";
    case "space-server.128cpu-dedicated.128gb-ram":
      return "1500";
    case "space-server.32cpu-dedicated.128gb-ram":
      return "1500";
    case "space-server.64cpu-dedicated.128gb-ram":
      return "1500";
    case "space-server.64cpu-dedicated.256gb-ram":
      return "2000";
    case "space-server.64cpu-dedicated.512gb-ram":
      return "2500";
    case "space-server.16cpu-dedicated.16gb-ram":
      return "300";
    case "space-server.16cpu-dedicated.32gb-ram":
      return "500";

    case "space-server.16cpu-dedicated.64gb-ram":
      return "850";
    case "space-server.32cpu-dedicated.32gb-ram":
      return "500";
    case "space-server.32cpu-dedicated.64gb-ram":
      return "850";
    case "space-server.64cpu-dedicated.64gb-ram":
      return "850";
    case "space-server.8cpu-dedicated.16gb-ram":
      return "300";
    case "space-server.8cpu-dedicated.32gb-ram":
      return "500";
    case "space-server.8cpu-dedicated.8gb-ram":
      return "200";
    case "space-server.32cpu-shared.128gb-ram":
      return "1500";

    case "space-server.16cpu-shared.64gb-ram":
      return "850";
    case "space-server.4cpu-shared.16gb-ram":
      return "300";
    case "space-server.8cpu-shared.32gb-ram":
      return "500";
    case "space-server.2cpu-shared.8gb-ram":
      return "100";
    case "prospace.shared.16cpu.128gb":
    case "prospace.16cpu.128gb":
      return "500";
    case "prospace.shared.16cpu.32gb":
    case "prospace.16cpu.32gb":
      return "300";

    case "prospace.shared.16cpu.64gb":
    case "prospace.16cpu.64gb":
      return "400";
    case "prospace.shared.8cpu.16gb":

    // eslint-disable-next-line no-fallthrough -- adjacent cases intentionally share this return
    case "prospace.8cpu.16gb":
      return "200";
    case "prospace.shared.4cpu.16gb":
    case "prospace.4cpu.16gb":
      return "200";
    case "prospace.shared.8cpu.32gb":
    case "prospace.8cpu.32gb":
      return "300";
    case "prospace.shared.2cpu.16gb":

    // eslint-disable-next-line no-fallthrough -- adjacent cases intentionally share this return
    case "prospace.2cpu.16gb":
      return "100";
    case "prospace.shared.4cpu.32gb":
    case "prospace.4cpu.32gb":
      return "200";
    case "prospace.shared.8cpu.64gb":
    case "prospace.8cpu.64gb":
      return "400";
    case "prospace.shared.2cpu.4gb":
    case "prospace.2cpu.4gb":
      return "60";
    case "prospace.shared.4cpu.8gb":
    case "prospace.4cpu.8gb":
      return "100";
    case "prospace.shared.2cpu.8gb":
    case "prospace.2cpu.8gb":
      return "100";
    case '{"vcpu":1,"ram":1}':
      return "20";
    case '{"vcpu":1,"ram":2}':
      return "40";
    case '{"vcpu":2,"ram":4}':
      return "60";
    case "PS23-BASIC-0001":
      return "20";
    case "PS23-BASIC-0002":
      return "40";
    case "PS23-BASIC-0003":
      return "60";
    case "shared.2xlarge":
      return "150";
    case "shared.3xlarge":
      return "300";
    case "shared.4xlarge":
      return "500";

    case "shared.5xlarge":
      return "850";
    case "shared.6xlarge":
      return "1500";
    case "shared.xlarge":
      return "100";
  }
};
