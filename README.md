var allocate = "Hello Budget";

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/94712551/173873098-af177314-71b1-46c9-8abd-ffc06f6c8ca4.png">

Allocate is an expense tracking application that allows users to create new transactions, keep track of a history of their transactions, see a visual representation of their savings, expenses, and investments, all of which can be dynamically updated according to the user's preference.

There are three options a user can select to classify the type of transaction - Savings, Investment, or Expense. For example, if I wanted to buy 50 shares of VGT stock, I could enter “VGT stock - 50” shares into the top of the form, select Investment from the drop-down box, and then enter the amount of the purchase. 

After clicking the Make Transaction button,  the transaction will be stored in a MongoDB database and added to the history section below. The chart and the total will then be updated to reflect this new transaction. At any time the user may delete history by clicking the trash icon on the transaction listed under history. This will result in both the removal of the transaction being updated on the chart and total, as well as the record being deleted in the database.

Tech Stack: Javascript, React, Redux, RTK Query, Node.js, Express, MongoDB, Tailwind CSS


