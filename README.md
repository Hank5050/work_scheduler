# Homework #4: Work Scheduler

Link to the finished product ==> https://hank5050.github.io/work_scheduler/

## Task

To create a work-day planner that uses third-party API's such as jQuery, moment.js, and Bootstrap. Parts of the application will change dynamically depending on the current time and day. The planner should also be able to save any tasks entered into the text area fields to local storage.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```