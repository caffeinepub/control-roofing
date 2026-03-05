import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FormEntry {
    issueType: IssueType;
    name: string;
    address: string;
    phone: string;
}
export enum IssueType {
    inspection = "inspection",
    emergency = "emergency",
    quote = "quote"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<FormEntry>>;
    getSortedByIssueType(): Promise<Array<FormEntry>>;
    submitContactForm(name: string, phone: string, address: string, issueType: IssueType): Promise<void>;
}
