export interface ToasterState {
  isVisible: boolean;
  message: string;
  type: "error" | "success";
}
