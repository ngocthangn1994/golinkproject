import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { VscCommentDiscussionQuote } from "react-icons/vsc";
import { useState } from "react";

function HeroSection() {
  const questions = [
    {
      title: "How does GoLink work?",
      answer:
        "GoLink lets you turn long URLs into short, easy-to-share links. Simply paste your URL, create a short link, and share it anywhere.",
    },
    {
      title: "Is GoLink free to use?",
      answer:
        "Yes! GoLink is free to use for creating and sharing short links.",
    },
    {
      title: "Can I create custom short links?",
      answer:
        "Yes! You can create custom short links that are easier to remember and share.",
    },
    {
      title: "How do I track and analyze my links?",
      answer:
        "GoLink allows you to view link statistics such as the number of clicks and activity for your shortened links.",
    },
    {
      title: "Is my data safe with GoLink?",
      answer:
        "Yes. GoLink is designed to keep your account and link information secure and protected.",
    },
    {
      title: "Do I need to create an account to use GoLink?",
      answer:
        "You can create short links without an account, but creating an account gives you access to features like managing and tracking your links.",
    },
  ];

  const [openQuestion, setOpenQuestion] = useState<Number | null>(null);
  return (
    <>
      <div className="space-y-5 text-slate-600 p-10">
        <div className="flex justify-center items-center">
          <div className="flex items-center rounded-xl bg-sky-50 px-5 py-2 gap-3">
            <FaRegCircleQuestion className="text-blue-600" />
            <p className="text-blue-600 font-medium">
              Frequently Asked Questions
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="font-bold text-5xl">
            <p>Got questions?</p>
            <div className="flex gap-3 justify-center">
              <p>We've got</p>
              <p className="text-blue-600"> answers.</p>
            </div>
          </div>
          <p>
            Find quick answers to the most common questions about GoLink and how
            it can help you.
          </p>
        </div>
        <div className="border border-slate-200 rounded-xl">
          <div className="px-10 bg-sky-100 p-10">
            <p className="text-blue-600 font-bold text-2xl">What is GoLink?</p>
            <p>
              GoLink is a URL shorterner that helps you create short,
              easy-to-share links, track clicks, and analyze your audience - all
              in one place
            </p>
          </div>
          <div>
            {questions.map((item, index) => (
              <div>
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="flex items-center gap-1"
                >
                  <CiCirclePlus className="text-blue-600 w-10 h-10 p-2" />
                  <p className="font-bold">{item.title}</p>
                </button>
                <div
                  key={item.title}
                  className={openQuestion === index ? "block pl-10" : "hidden"}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between bg-sky-100 border border-slate-100 p-5 rounded-xl shadow-sm">
          <LuMessageCircleQuestion className="w-18 h-18 text-blue-600 p-2 bg-sky-50 rounded-full" />
          <div>
            <p className="font-bold text-xl">Still have questions?</p>
            <p>We're here to help. Reach out to our support team.</p>
          </div>
          <div className="text-blue-600 flex items-center gap-1 border border-slate-200 bg-white rounded-2xl font-bold p-2">
            <MdOutlineMail className="w-12 h-12" />
            <p>Contact support</p>
          </div>
          <VscCommentDiscussionQuote className="text-7xl text-blue-600 bg-blue-50 p-2 rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
