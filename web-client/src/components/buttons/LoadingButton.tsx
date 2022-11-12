import Spinner from "../loaders/Spinner";


type LoadingProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export default function LoadingButton({
  loading,
  btnColor = "bg-orange-400",
  textColor = "text-white",
  children,
}: LoadingProps) {
  return (
    <button
      type="submit"
      className={`w-full py-3 font-semibold mt-5 ${btnColor} rounded-lg outline-none border-none flex justify-center ${
        loading ? "bg-[#ccc]" : ""
      }`}
    >
      {loading ? (
        <Spinner />
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
}
