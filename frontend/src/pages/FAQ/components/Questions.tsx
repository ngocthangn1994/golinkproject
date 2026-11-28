import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState<Number | null>(null);

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
  return (
    <>
      <div className="space-y-5">
        <div className="px-10 bg-blue-100 p-10  border-l-10 border-blue-600 rounded-xl hover:bg-blue-200">
          <p className="text-blue-600 font-bold text-2xl">What is GoLink?</p>
          <p>
            GoLink is a URL shorterner that helps you create short,
            easy-to-share links, track clicks, and analyze your audience - all
            in one place
          </p>
        </div>
        <div className="space-y-3">
          {questions.map((item, index) => (
            <div className="border border-slate-200 rounded-xl p-3 hover:shadow">
              <button
                key={item.title}
                type="button"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
                className="flex items-center gap-1"
              >
                <CiCirclePlus className="text-blue-600 w-10 h-10 p-2" />
                <p className="font-bold text-slate-900">{item.title}</p>
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
    </>
  );
};

export default Questions;
