import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api, type ApiReview } from "@/backend/api";
import { useAuth } from "@/lib/auth";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/reviews")({
  component: ReviewsAdmin,
});

function ReviewsAdmin() {
  const { user } = useAuth();
  const hostelId = user?.role as string;
  const [reviews, setReviews] = useState<ApiReview[]>([]);

  useEffect(() => {
    if (hostelId && hostelId !== "customer") {
      api.getReviews(hostelId).then(setReviews);
    }
  }, [hostelId]);

  const [replyId, setReplyId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <div className="flex justify-between items-center bg-card border border-border p-4 rounded-2xl shadow-sm">
        <div>
          <h2 className="text-[16px] font-bold">Guest Reviews</h2>
          <p className="text-[12px] text-muted-foreground mt-0.5">{reviews.length} total reviews</p>
        </div>
        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full grid place-items-center">
          <Icon name="star" className="text-[20px]" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {reviews.map(r => (
          <div key={r.id} className="bg-card border border-border p-4 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold text-[14px]">{r.guestName}</div>
                <div className="text-[11px] text-muted-foreground">{new Date(r.date).toLocaleDateString()}</div>
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className={`text-[16px] ${i < r.rating ? "" : "opacity-30"}`} />
                ))}
              </div>
            </div>
            <p className="text-[13px] text-foreground leading-relaxed mt-2">{r.comment}</p>
            
            <div className="mt-4 pt-3 border-t border-border flex justify-end">
              <button 
                onClick={() => setReplyId(replyId === r.id ? null : r.id)}
                className="text-[12px] font-semibold text-primary flex items-center gap-1.5 hover:underline"
              >
                <Icon name="reply" className="text-[16px]" />
                Reply
              </button>
            </div>
            
            {replyId === r.id && (
              <div className="mt-3 flex gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <input 
                  autoFocus
                  placeholder="Type your response..."
                  className="flex-1 bg-secondary rounded-xl px-3 py-2 text-[13px] outline-none"
                />
                <button 
                  onClick={() => setReplyId(null)}
                  className="bg-primary text-primary-foreground px-4 rounded-xl font-bold text-[13px]"
                >
                  Send
                </button>
              </div>
            )}
          </div>
        ))}
        {reviews.length === 0 && (
          <div className="p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl">
            No reviews yet.
          </div>
        )}
      </div>
    </div>
  );
}
