package com.notesapp.notesapp.mail;

public interface FeedbackSender {
	void sendFeedback(String from, String name, String feedback);
}
