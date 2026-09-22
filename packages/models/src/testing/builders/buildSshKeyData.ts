import type {
  SshKeyListItemData,
  SshKeyData,
} from "../../user/SshKey/types";

export function buildSshKeyData(
  overrides: Partial<SshKeyData> = {},
): SshKeyData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    fingerprint: "SHA256:abc",
    algorithm: "ssh-ed25519",
    key: "ssh-ed25519 AAAA",
    sshKeyId: "sshkey-id",
    comment: "laptop",
    ...overrides,
  };
}

export function buildSshKeyListItemData(
  overrides: Partial<SshKeyListItemData> = {},
): SshKeyListItemData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    fingerprint: "SHA256:abc",
    algorithm: "ssh-ed25519",
    key: "ssh-ed25519 AAAA",
    sshKeyId: "sshkey-id",
    comment: "laptop",
    ...overrides,
  };
}
