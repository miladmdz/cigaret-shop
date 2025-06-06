import React from "react";

function CommentListCard({ comments = [] }) {
  return (
    <div className="w-1/2 flex flex-col items-start gap-5  overflow-y-auto max-h-[450px]">
      {comments.length ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="border border-gray-300 rounded h-fit w-full px-4 py-2"
          >
            <div className="flex items-center px-1 justify-between">
              <div className="flex items-center gap-1 ">
                <p className="text-sm text-primaryBlack">نویسنده: </p>
                <h2 className="font-bold text-primaryOrange-light">
                  {comment.author}
                </h2>
              </div>

              <p className="text-xs text-primaryOrange-dark">
                امتیاز: {comment.rate}/5
              </p>
            </div>

            <p className="text-sm text-gray-600 py-2">{comment.text}</p>

            <p className="flex justify-end items-center font-bold text-xs">
              {comment.date}
            </p>
          </div>
        ))
      ) : (
        <div className="w-full flex items-center justify-start px-4 rounded min-h-12 bg-blue-400 text-white">
          نظری ثبت نشده است
        </div>
      )}
    </div>
  );
}

export default CommentListCard;
