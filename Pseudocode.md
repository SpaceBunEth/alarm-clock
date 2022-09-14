# Pseudocode Alarm Clock

## Requirements
1. Display the current time in a digital clock format
    - Display in this format: (Hours:Minutes:Seconds) and (Month-Day-Year) if applicable 
    -  It should count up, incrementing the seconds.
2. Pick a time to make the alarm go off (this can be done as a variable)
3. Make sure the clock updates every second without refreshing the page
4. Start the alarm when the difference between the current time and the time the alarm is set for reaches 0 (Tip: use a javascript alert, you do not need it to make noise)
- - - 
## About 
We need to construct pseudocode for a alarm clock that can be fitted for HTML, CSS, and Javascript. Above are the requirments for the project. 

### Our Alarm Clock Should
- Working like a digital clock
- show the user what time and date it is currently
- Update the time and date accurately, updating the user
- provide the user with a way to "set a new alarm"
- provide the user with an alart when the set alarm time is reached

### Project will consist of HTML, CSS, and Javascript Code
This Pseudocode is written with web development in mind. Their for terms and concepts from the languages listed above that will be referenced within the Pseudocode.

- - - 

## Layout

We need a way to structure our program. Provide a user frinedly UI, the look and feel. As well as detailing the logic for how our program and how it will work. For web development html is the bones of our project, Css is our skin/ apperance, Javascript is our musical/ action & movement.

### UI Structure
- Display current time
- Display current date
- Display button for "set alarm"
    - promt user to enter values for alarm on 'click'
    - provide user to easy to use options to enter data

### UI Style
- colored background
- colored text/ clock numbers
- shading/ detail effects
- center items/ data
- choose font style
- button style

### Logic Structure
- Get time and date data
- update displayed data
- button to 'set alarm'
    - prompt user to enter time/date data
    - save changes/ record user info
- if "set alarm" value equals current time 
    - alert user

## INIT(): Variables

- - -
### DateTime()
> Gets the current date and time upon request returns a set of values.
### Properties
```
"YYYY,MM,DD,hh,mm,ss"
```

### Time
> Hold the value of time. Hours, Minutes, Seconds.
### Properties
```
.hours
.minutes
.seconds
```
`Ex: var = time.hour` 
- - -

### Date
> Holds the value of date, Day, Month, Year.

### Properties
```
.day
.month
.year
```

`Ex: var = date.day`
- - -

### Alarm
> Holds the date and time value set by the user
### Properties
List of values alarm holds
```
year
month
day
hour
minute
second
```

### PageElement
> PageElement represents the elements a user would see on a web page i.e. HTML tags
### Properties
```
.text
```
- - -
## Functionality
### Helper Functions
```
UpdateDateTime()
    Get DateTime
    Set var Date to DateTimes's date
    Set var Time to DateTimes's time
    Return Date, Time

SetAlarm()
    Prompt Window "Asks user to enter data"
    If SaveButton is 'clicked'
        Set Entered data = Alarm
        Exit Prompt Window
    Else 
        Wait For User

AlarmAlert()
    Window Prompt "Alarm RING RING"
    Wait For User
    
UpdateDisplay()
    Set PageELemet.text TO Time
    Set PageElement.text TO Date



```

### RUN
```
Load PageElements
Fetch Current DateTime
Set var Date to DateTime's date
Set var Time to DateTime's time
Set var Alarm to nothing

Event Button IS 'clicked'
    SetAlarm()

FOREVER LOOP
    UpdateDateTime()
    UpdateDisplay()
    IF Alarm Equals Date AND Time
        AlarmAlert()
    
    



```






