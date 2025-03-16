import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  isBot: text("is_bot").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  message: true
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  message: true,
  isBot: true
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;
