export interface ClientConfig {
    apiKey: string;

    // TODO: Could include base URL and version
    // There can be different version of APIs per client (for example: light weight version for mobile client vs heavier payload for desktop clients)
}