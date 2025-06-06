import React from "react";

import CommentFormCard from "./CommentFormCard.component";
import CommentListCard from "./CommentListCard.component";

function CommentsCard({ comments }) {
  return (
    <div className="w-full flex items-start justify-start gap-10">
      <CommentListCard comments={comments} />
      <CommentFormCard />
    </div>
  );
}

export default CommentsCard;
