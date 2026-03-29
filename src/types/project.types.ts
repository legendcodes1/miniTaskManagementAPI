
export interface Project {
    id: string;
    name: string;
    description?: string;
    ownerId: string; // reference to a user
    status: "active" | "completed" | "on-hold";
    createdAt: string;
    dueDate?: string;
  }