export type BkashInitRequest = {
  amountMinor: number;
  orderId: string;
};

export type BkashInitResponse = {
  paymentId: string;
  redirectUrl: string;
};

export async function initializeBkashPayment(req: BkashInitRequest): Promise<BkashInitResponse> {
  return {
    paymentId: `bk_${req.orderId}`,
    redirectUrl: "/checkout",
  };
}

export async function confirmBkashPayment(paymentId: string): Promise<"success" | "failed"> {
  return "success";
}
