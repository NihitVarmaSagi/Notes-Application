package com.notesapp.notesapp.controller;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.notesapp.notesapp.mail.FeedbackSender;
import com.notesapp.notesapp.viewmodel.FeedbackViewModel;

import javax.validation.ValidationException;



@RestController
@RequestMapping("/api/feedback")
@CrossOrigin
public class FeedbackController {
    private FeedbackSender feedbackSender;

    public FeedbackController(FeedbackSender feedbackSender) {
        this.feedbackSender = feedbackSender;
    }

    @PostMapping
    public void sendFeedback(@RequestBody FeedbackViewModel feedbackViewModel,
                             BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new ValidationException("Feedback has errors; Can not send feedback;");
        }

        this.feedbackSender.sendFeedback(
                feedbackViewModel.getEmail(),
                feedbackViewModel.getName(),
                feedbackViewModel.getFeedback());
    }
}