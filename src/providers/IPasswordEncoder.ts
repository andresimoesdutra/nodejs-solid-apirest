export interface IPasswordEncoder {
    encode(raw: string): string;
    matches(raw: string, hash: string): boolean;
}