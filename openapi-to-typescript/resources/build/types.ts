declare namespace API {
  namespace Paths {
    namespace V2.Catalog {
      namespace Get {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.Catalog;
          }
        }
      }
    }

    namespace V2.ServiceInstances.InstanceId {
      namespace Put {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
          }

          interface Query {
            accepts_incomplete?: boolean;
          }

          type RequestBody = API.Components.Schemas.ServiceInstanceProvisionRequest;
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.ServiceInstanceProvisionResponse;
          }

          namespace $201 {
            type Content = API.Components.Schemas.ServiceInstanceProvisionResponse;
          }

          namespace $202 {
            type Content = API.Components.Schemas.ServiceInstanceAsyncOperation;
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $409 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $422 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
          }

          interface Query {
            accepts_incomplete?: boolean;
          }

          type RequestBody = API.Components.Schemas.ServiceInstanceUpdateRequest;
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.Object;
          }

          namespace $202 {
            type Content = API.Components.Schemas.ServiceInstanceAsyncOperation;
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $422 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
          }

          interface Query {
            service_id: string;
            plan_id: string;
            accepts_incomplete?: boolean;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.Object;
          }

          namespace $202 {
            type Content = API.Components.Schemas.AsyncOperation;
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $410 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $422 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
          }

          interface Query {
            service_id?: string;
            plan_id?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.ServiceInstanceResource;
          }

          namespace $404 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }
    }

    namespace V2.ServiceInstances.InstanceId.LastOperation {
      namespace Get {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
          }

          interface Path {
            instance_id: string;
          }

          interface Query {
            service_id?: string;
            plan_id?: string;
            operation?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.LastOperationResource;

            interface Headers {
              "Retry-After"?: string;
            }
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $410 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }
    }

    namespace V2.ServiceInstances.InstanceId.ServiceBindings.BindingId.LastOperation {
      namespace Get {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
          }

          interface Path {
            instance_id: string;
            binding_id: string;
          }

          interface Query {
            service_id?: string;
            plan_id?: string;
            operation?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.LastOperationResource;

            interface Headers {
              "Retry-After"?: string;
            }
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $410 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }
    }

    namespace V2.ServiceInstances.InstanceId.ServiceBindings.BindingId {
      namespace Put {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
            binding_id: string;
          }

          interface Query {
            accepts_incomplete?: boolean;
          }

          type RequestBody = API.Components.Schemas.ServiceBindingRequest;
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.ServiceBindingResponse;
          }

          namespace $201 {
            type Content = API.Components.Schemas.ServiceBindingResponse;
          }

          namespace $202 {
            type Content = API.Components.Schemas.AsyncOperation;
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $409 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $422 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
            binding_id: string;
          }

          interface Query {
            service_id: string;
            plan_id: string;
            accepts_incomplete?: boolean;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.Object;
          }

          namespace $202 {
            type Content = API.Components.Schemas.AsyncOperation;
          }

          namespace $400 {
            type Content = API.Components.Schemas.Error;
          }

          namespace $410 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "X-Broker-API-Version": API.Components.Parameters.ApiVersion;
            "X-Broker-API-Originating-Identity"?: API.Components.Parameters.OriginatingIdentity;
          }

          interface Path {
            instance_id: string;
            binding_id: string;
          }

          interface Query {
            service_id?: string;
            plan_id?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            type Content = API.Components.Schemas.ServiceBindingResource;
          }

          namespace $404 {
            type Content = API.Components.Schemas.Error;
          }
        }
      }
    }
  }

  namespace Components {
    namespace Schemas {
      interface Catalog {
        services?: API.Components.Schemas.Service[];
      }

      interface Service {
        name: string;
        id: string;
        description: string;
        tags?: string[];
        requires?: ("syslog_drain" | "route_forwarding" | "volume_mount")[];
        bindable: boolean;
        metadata?: API.Components.Schemas.Metadata;
        dashboard_client?: API.Components.Schemas.DashboardClient;
        plan_updateable?: boolean;
        plans: API.Components.Schemas.Plan[];
      }

      interface DashboardClient {
        id?: string;
        secret?: string;
        redirect_uri?: string;
      }

      interface Plan {
        id: string;
        name: string;
        description: string;
        metadata?: API.Components.Schemas.Metadata;
        maintenance_info?: API.Components.Schemas.MaintenanceInfo;
        free?: boolean;
        bindable?: boolean;
        schemas?: API.Components.Schemas.Schemas;
      }

      interface Schemas {
        service_instance?: API.Components.Schemas.ServiceInstanceSchema;
        service_binding?: API.Components.Schemas.ServiceBindingSchema;
      }

      interface ServiceInstanceSchema {
        create?: API.Components.Schemas.SchemaParameters;
        update?: API.Components.Schemas.SchemaParameters;
      }

      interface ServiceBindingSchema {
        create?: API.Components.Schemas.SchemaParameters;
      }

      interface SchemaParameters {
        parameters?: API.Components.Schemas.JsonSchema;
      }

      type JsonSchema = "http://json-schema.org/draft-04/schema";

      interface ServiceInstanceResource {
        service_id?: string;
        plan_id?: string;
        dashboard_url?: string;
        parameters?: API.Components.Schemas.Object;
      }

      interface ServiceInstanceProvisionRequest {
        service_id: string;
        plan_id: string;
        context?: API.Components.Schemas.Context;
        organization_guid: string;
        space_guid: string;
        parameters?: API.Components.Schemas.Object;
      }

      interface ServiceInstanceProvisionResponse {
        dashboard_url?: string;
      }

      interface ServiceInstanceAsyncOperation {
        dashboard_url?: string;
        operation?: string;
      }

      interface ServiceInstanceUpdateRequest {
        context?: API.Components.Schemas.Context;
        service_id: string;
        plan_id?: string;
        parameters?: API.Components.Schemas.Object;
        previous_values?: API.Components.Schemas.ServiceInstancePreviousValues;
      }

      interface ServiceInstancePreviousValues {
        service_id?: string;
        plan_id?: string;
        organization_id?: string;
        space_id?: string;
      }

      interface AsyncOperation {
        operation?: string;
      }

      interface LastOperationResource {
        state: "in progress" | "succeeded" | "failed";
        description?: string;
        instance_usable?: boolean;
        update_repeatable?: boolean;
      }

      interface ServiceBindingResource {
        credentials?: API.Components.Schemas.Object;
        syslog_drain_url?: string;
        route_service_url?: string;
        volume_mounts?: API.Components.Schemas.ServiceBindingVolumeMount[];
        endpoints?: API.Components.Schemas.ServiceBindingEndpoint[];
        parameters?: API.Components.Schemas.Object;
      }

      interface ServiceBindingRequest {
        context?: API.Components.Schemas.Context;
        service_id: string;
        plan_id: string;
        app_guid?: string;
        bind_resource?: API.Components.Schemas.ServiceBindingResouceObject;
        parameters?: API.Components.Schemas.Object;
      }

      interface ServiceBindingResouceObject {
        app_guid?: string;
        route?: string;
      }

      interface ServiceBindingResponse {
        credentials?: API.Components.Schemas.Object;
        syslog_drain_url?: string;
        route_service_url?: string;
        volume_mounts?: API.Components.Schemas.ServiceBindingVolumeMount[];
        endpoints?: API.Components.Schemas.ServiceBindingEndpoint[];
      }

      interface ServiceBindingEndpoint {
        host: string;
        ports: string[];
        protocol?: "tcp" | "udp" | "all";
      }

      interface ServiceBindingVolumeMount {
        driver: string;
        container_dir: string;
        mode: "r" | "rw";
        device_type: "shared" | "shared2";
        device: API.Components.Schemas.ServiceBindingVolumeMountDevice;
      }

      interface ServiceBindingVolumeMountDevice {
        volume_id: string;
        mount_config?: API.Components.Schemas.Object;
      }

      interface Context {}

      interface Metadata {}

      interface MaintenanceInfo {
        version: string;
        description?: string;
      }

      interface Object {}

      interface Error {
        error?: string;
        description?: string;
        instance_usable?: boolean;
        update_repeatable?: boolean;
      }
    }

    namespace Parameters {
      type ApiVersion = string;

      type OriginatingIdentity = string;
    }
  }
}
