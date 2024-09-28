# Date-Range-Picker
![image](https://github.com/user-attachments/assets/e8af61fa-bfd1-4677-8f40-a6d0163a8d5f)

The Date-range-picker has the following functionalities

● The component should allow users to select a date range defined by a start date and an
end date. The start date and end date must be a weekday and should
not be a weekend.


● The selected date range should highlight only weekdays and weekends should not be
highlighted.

After Selection:

![image](https://github.com/user-attachments/assets/6f04ec51-aa56-47fd-89f9-f32cd8f2a051)

● The user should be able to change the year displayed in the date picker.

● The user should be able to change the month displayed in the date picker.

![image](https://github.com/user-attachments/assets/2a9b4618-3e6e-4658-bc2d-b1ed9410a9b2) ![image](https://github.com/user-attachments/assets/6cf49db3-0f81-4e55-aa8d-7fe846ff1006) ![image](https://github.com/user-attachments/assets/10edccda-6b6d-485a-8565-3968c8334798)




● The component should include a change handler that returns the selected date range
and any weekend dates within that range. As an example, if the range selected is
December 1st, 2022, to December 15th, 2022, the returned values should be an array
containing the date range as the first element (e.g. [2022-12-01, 2022-12-15]) and an
array of weekend dates within that range as the second element (e.g. [2022-12-03,
2022-12-04, 2022-12-10, 2022-12-11]).

The weekdays and weekends are stored in an array, can be seen in console:

![image](https://github.com/user-attachments/assets/2b14e2b6-10b0-41df-96ef-18c27d7d60c4)

● The component should include a prop that allows the user to input predefined ranges,
such as the last 7 days or last 30 days. These predefined ranges should be displayed
below the calendars.

Predefined Ranges:

1. last 7 days:

![image](https://github.com/user-attachments/assets/146196db-89f7-461a-9eb7-16158ec5f635)

2. last 30 days:



