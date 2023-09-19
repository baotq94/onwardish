import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { useTranslation } from "next-i18next";
import { Avatar } from "antd";

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this line
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 255) {
      setText(inputValue);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true); // Disable the submit button
    await onSubmit(e); // Call the onSubmit function

    setIsSubmitting(false); // Enable the submit button after request is complete
  };

  console.log(session);

  return (
    <form onSubmit={handleSubmit} className="bg-opacity-80">
      <textarea
        className="flex w-full max-h-40 p-3 border border-gray-400 rounded resize-y bg-gray-200 bg-opacity-0 text-900 placeholder-gray-500 focus:outline-none focus:border-gray-600"
        rows={2}
        placeholder={session ? t("AlreadyLogin") : t("NotLoginYet")}
        onChange={(e) => handleChange(e)}
        value={text}
        disabled={!session}
      />
      <div className="flex items-center justify-between mt-4">
        {session ? (
          <>
            <div className="flex items-center space-x-2 md:space-x-6">
              <Link
                href="/api/auth/signout"
                className="py-2 px-4 rounded border border-gray-400 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800 hover:bg-overlay"
                style={{
                  minWidth: "5rem",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                {t("Logout")}
              </Link>
              <button
                className="py-2 px-4 rounded border border-gray-400 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800 hover:bg-overlay"
                style={{
                  minWidth: "5rem",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                disabled={isSubmitting}
              >
                {t("Comment")}
              </button>
            </div>
            <div className="">
              {session.user?.image ? (
                <Avatar
                  className="h-full w-[25px] md:w-[32px]"
                  src={<img src={session.user.image} alt="avatar" />}
                />
              ) : (
                // Render a placeholder or null
                // For example, you can render a default avatar image:
                <Avatar
                  className="h-full w-[25px] md:w-[32px]"
                  style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                />
              )}
              &nbsp;&nbsp;
              <span className="hidden md:inline-block">
                Bạn đang đăng nhập với tài khoản &nbsp;
              </span>
              <span className="text-sm md:text-lg text-rose">
                {session.user?.name}
              </span>
            </div>
          </>
        ) : (
          <Link
            href="/api/auth/signin"
            type="button"
            className="py-2 px-4 rounded border border-gray-400 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800 hover:bg-overlay"
            style={{
              minWidth: "5rem",
              transition: "border-color 0.3s, color 0.3s",
            }}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            {t("Login")}
          </Link>
        )}
      </div>
    </form>
  );
}
