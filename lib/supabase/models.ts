export interface Board {
  id: string;
  title: string;
  description: string;
  color: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Column {
  id: number;
  created_at: string;
  board_id: number;
  title: string;
  sort_order: number;
  user_id: string;
}

export interface Task {
  id: string;
  created_at: string;
  title: string;
  description: string;
  assignee: string | null;
  due_date: string | null;
  priority: "low" | "medium" | "high";
  sort_order: number;
  updated_at: string;
}
