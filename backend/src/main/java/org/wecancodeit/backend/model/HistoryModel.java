package org.wecancodeit.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class HistoryModel {
    @Id
    @GeneratedValue
    long id;

    int year;
    int month;
    int day;
    String event;

    public HistoryModel() {
    }

    public HistoryModel(int year, int month, int day, String event) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.event = event;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public long getId() {
        return id;
    }

}
