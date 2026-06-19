package com.library.aspect;

import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.library.service.BookService.*(..))")
    public void beforeMethod() {
        System.out.println("Method execution started");
    }

    @After("execution(* com.library.service.BookService.*(..))")
    public void afterMethod() {
        System.out.println("Method execution ended");
    }
}
