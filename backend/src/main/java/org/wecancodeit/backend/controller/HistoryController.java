package org.wecancodeit.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.backend.service.HistoryFactService;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/history")
public class HistoryController {
    @Resource
    HistoryFactService service;

    @GetMapping("/random/{year}")
    public ResponseEntity<?> getFactById(@PathVariable String year, HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getRandomFact(year));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
