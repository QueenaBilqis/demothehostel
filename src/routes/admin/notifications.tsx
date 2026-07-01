import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/MobileFrame";

export const Route = createFileRoute("/admin/notifications")({
  component: AdminNotifications,
});

type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  type: "info" | "warning" | "success";
};

function AdminNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "System Update",
      message: "The booking system will undergo maintenance at 2 AM tonight.",
      date: new Date().toISOString(),
      type: "warning"
    },
    {
      id: "2",
      title: "New Feature Available",
      message: "You can now manage hotel amenities directly from the settings page.",
      date: new Date(Date.now() - 86400000).toISOString(),
      type: "info"
    },
    {
      id: "3",
      title: "Payout Successful",
      message: "Your monthly revenue of $14,250 has been transferred to your account.",
      date: new Date(Date.now() - 172800000).toISOString(),
      type: "success"
    }
  ]);
  
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [newType, setNewType] = useState<"info" | "warning" | "success">("info");

  const sendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newMessage) return;
    
    setNotifications([
      {
        id: Date.now().toString(),
        title: newTitle,
        message: newMessage,
        date: new Date().toISOString(),
        type: newType
      },
      ...notifications
    ]);
    
    setNewTitle("");
    setNewMessage("");
    setShowNew(false);
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[420px] mx-auto pb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[20px] font-bold">Alerts & Notifications</h2>
        <button 
          onClick={() => setShowNew(!showNew)}
          className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-sm shadow-primary/20"
        >
          <Icon name={showNew ? "close" : "add_alert"} className="text-[18px]" />
          {showNew ? "Close" : "New Alert"}
        </button>
      </div>

      {showNew && (
        <form onSubmit={sendNotification} className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <h3 className="font-bold text-[15px]">Send Push Notification</h3>
          
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Title</label>
            <input 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="e.g. Server Maintenance"
              className="w-full bg-secondary rounded-xl px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary" 
              required
            />
          </div>
          
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Message</label>
            <textarea 
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type your alert message here..."
              rows={3}
              className="w-full bg-secondary rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-primary resize-y" 
              required
            />
          </div>
          
          <div>
            <label className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 block tracking-wide">Alert Type</label>
            <div className="flex gap-2">
              {(["info", "warning", "success"] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setNewType(t)}
                  className={`flex-1 py-2 rounded-xl text-[12px] font-bold capitalize transition-all ${
                    newType === t 
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" 
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          <button type="submit" className="w-full py-3.5 mt-2 rounded-xl bg-primary text-primary-foreground font-bold text-[13px] active:scale-[0.98] transition-all shadow-sm shadow-primary/20">
            Send Alert
          </button>
        </form>
      )}

      <div className="flex flex-col gap-3">
        {notifications.map(n => (
          <div key={n.id} className="bg-card border border-border rounded-2xl p-4 shadow-sm flex gap-3 relative overflow-hidden">
            <div className="mt-1">
              {n.type === "info" && <Icon name="info" className="text-[20px] text-blue-500" />}
              {n.type === "warning" && <Icon name="warning" className="text-[20px] text-orange-500" />}
              {n.type === "success" && <Icon name="check_circle" className="text-[20px] text-green-500" />}
            </div>
            <div className="flex-1 pr-6">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-[14px] leading-tight">{n.title}</h4>
                <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap ml-2">
                  {new Date(n.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{n.message}</p>
            </div>
            
            <button 
              onClick={() => deleteNotification(n.id)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive grid place-items-center transition-colors"
            >
              <Icon name="close" className="text-[16px]" />
            </button>
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="p-8 text-center text-muted-foreground text-[13px] bg-card border border-border rounded-2xl">
            No notifications available.
          </div>
        )}
      </div>
    </div>
  );
}
