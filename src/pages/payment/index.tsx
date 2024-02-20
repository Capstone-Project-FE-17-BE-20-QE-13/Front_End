import Layout from "../../components/Layout";
import { useForm } from "react-hook-form";
import { PaymentType, TransactionResponse, paymentSchema } from "../../utils/apis/company/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { payment } from "../../utils/apis/company/api";
import { useState } from "react";

const Payment = () => {
  const [paymentData, setPaymentData] = useState<Partial<TransactionResponse>>({});
  const { register, handleSubmit } = useForm<PaymentType>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      bank_account: "",
    },
  });

  const handlePayment = async (data: PaymentType) => {
    console.log(data);
    try {
      const result = await payment(data);
      console.log(result);
      setPaymentData(result.data);
    } catch (error: any) {
      console.log((error as Error).message);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex gap-5 justify-center items-center">
          <h1>Choose Virtual Account</h1>
          <form className="flex gap-5" onSubmit={handleSubmit(handlePayment)}>
            <select id="bank_account" className="p-2 rounded-md drop-shadow-md outline-none" {...register("bank_account")}>
              <option value="bni">BNI</option>
              <option value="bri">BRI</option>
              <option value="bca">BCA</option>
            </select>
            <input type="submit" value="Bayar" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
          </form>
        </div>
        <h1>Berikut nomor virtual akun untuk pembayaran:</h1>
        <h1>
          {paymentData.bank_account} : {paymentData.va_number}
        </h1>
      </Layout>
    </>
  );
};

export default Payment;
