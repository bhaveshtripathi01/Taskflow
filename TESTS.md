# Test Cases for TaskFlow Application

This document outlines the test cases implemented and how to verify them manually.

## Test Suite

### 1. Authentication Tests

#### Test 1.1: Valid Login
**Steps:**
1. Navigate to the application
2. Enter email: `intern@demo.com`
3. Enter password: `intern123`
4. Click "Sign In"

**Expected Result:**
- User is redirected to the task board
- Header shows "TaskFlow" logo and logout button
- No error message displayed

**Status:** Pass

---

#### Test 1.2: Invalid Login - Wrong Password
**Steps:**
1. Navigate to the application
2. Enter email: `intern@demo.com`
3. Enter password: `wrongpassword`
4. Click "Sign In"

**Expected Result:**
- Error message appears: "Invalid email or password. Please try again."
- User remains on login page
- Form fields are not cleared

**Status:** Pass

---

#### Test 1.3: Invalid Login - Wrong Email
**Steps:**
1. Navigate to the application
2. Enter email: `wrong@email.com`
3. Enter password: `intern123`
4. Click "Sign In"

**Expected Result:**
- Error message appears: "Invalid email or password. Please try again."
- User remains on login page
- Message shakes with animation

**Status:**  Pass

---

#### Test 1.4: Remember Me Functionality
**Steps:**
1. Login with correct credentials
2. Check "Remember me" checkbox
3. Click "Sign In"
4. Refresh the page (F5 or Ctrl+R)

**Expected Result:**
- User remains logged in after refresh
- Task board is displayed immediately
- All tasks and data are preserved

**Status:**  Pass

---

#### Test 1.5: Remember Me - Unchecked
**Steps:**
1. Login without checking "Remember me"
2. Click "Sign In"
3. Refresh the page

**Expected Result:**
- User is logged out after refresh
- Redirected to login page
- Must login again

**Status:**  Pass

---

#### Test 1.6: Logout Functionality
**Steps:**
1. Login to the application
2. Click "Logout" button in header

**Expected Result:**
- User is redirected to login page
- Authentication state is cleared
- Cannot access board by navigating back

**Status:** Pass

---

### 2. Task Management Tests

#### Test 2.1: Create Task - All Fields
**Steps:**
1. Login to application
2. Click "+ New Task" button
3. Fill in:
   - Title: "Complete Frontend Assignment"
   - Description: "Build task board with React"
   - Priority: "High"
   - Due Date: Select a future date
   - Tags: "frontend, react, internship"
4. Click "Create"

**Expected Result:**
- Task appears in "Todo" column
- All fields are correctly displayed
- Tags are split and displayed as separate badges
- Activity log shows "Task created"
- Task count badge increments

**Status:** Pass

---

#### Test 2.2: Create Task - Required Field Only
**Steps:**
1. Click "+ New Task"
2. Enter only Title: "Minimal Task"
3. Leave all other fields empty
4. Click "Create"

**Expected Result:**
- Task is created successfully
- Only title is displayed
- Priority defaults to "Medium"
- No errors occur

**Status:** Pass

---

#### Test 2.3: Create Task - Empty Title Validation
**Steps:**
1. Click "+ New Task"
2. Leave title empty
3. Fill other fields
4. Click "Create"

**Expected Result:**
- Form validation prevents submission
- Browser shows "Please fill out this field" message
- Task is not created

**Status:** Pass

---

#### Test 2.4: Edit Task
**Steps:**
1. Create a task
2. Hover over the task card
3. Click the pencil (edit) icon
4. Change title to "Updated Task Title"
5. Change priority from "Medium" to "High"
6. Click "Update"

**Expected Result:**
- Modal closes
- Task shows updated information
- Activity log shows "Task edited"
- All changes are persisted

**Status:** Pass

---

#### Test 2.5: Delete Task
**Steps:**
1. Create a task
2. Hover over the task card
3. Click the trash (delete) icon
4. Click "OK" on confirmation dialog

**Expected Result:**
- Confirmation dialog appears
- Task is removed from board
- Activity log shows "Task deleted"
- Task count decreases

**Status:** Pass

---

#### Test 2.6: Delete Task - Cancel
**Steps:**
1. Create a task
2. Click delete icon
3. Click "Cancel" on confirmation dialog

**Expected Result:**
- Task remains on board
- No changes occur
- Activity log unchanged

**Status:**  Pass

---

### 3. Board Operations Tests

#### Test 3.1: Drag and Drop - Todo to Doing
**Steps:**
1. Create a task in Todo column
2. Click and hold on the task card
3. Drag to "Doing" column
4. Release mouse

**Expected Result:**
- Task moves to Doing column
- Activity log shows "Task moved"
- Task count updates in both columns
- Smooth animation during drag

**Status:**  Pass

---

#### Test 3.2: Drag and Drop - Doing to Done
**Steps:**
1. Have a task in Doing column
2. Drag task to Done column

**Expected Result:**
- Task moves to Done column
- Activity is logged
- Column counts update correctly

**Status:**  Pass

---

#### Test 3.3: Search Functionality
**Steps:**
1. Create tasks with titles:
   - "Design Homepage"
   - "Develop API"
   - "Design Logo"
2. Type "design" in search box

**Expected Result:**
- Only tasks with "design" in title are shown
- Search is case-insensitive
- Other tasks are hidden
- Clearing search shows all tasks

**Status:**  Pass

---

#### Test 3.4: Priority Filter
**Steps:**
1. Create tasks with different priorities:
   - Task 1: High
   - Task 2: Medium
   - Task 3: Low
2. Select "High" from priority filter

**Expected Result:**
- Only high priority tasks are displayed
- Tasks in all columns are filtered
- Selecting "All Priorities" shows all tasks

**Status:**  Pass

---

#### Test 3.5: Sort by Due Date
**Steps:**
1. Create three tasks:
   - Task A: Due date 2025-03-01
   - Task B: Due date 2025-02-20
   - Task C: No due date
2. Click "Sort by Date" button

**Expected Result:**
- Tasks are ordered: Task B, Task A, Task C
- Tasks without dates appear last
- Button becomes highlighted (primary style)

**Status:**  Pass

---

#### Test 3.6: Combined Filters
**Steps:**
1. Create multiple tasks with various properties
2. Enter search term
3. Select priority filter
4. Enable date sorting

**Expected Result:**
- All filters work together correctly
- Tasks match all active filters
- Results update in real-time

**Status:**  Pass

---

### 4. Persistence Tests

#### Test 4.1: Data Persistence - Page Refresh
**Steps:**
1. Create several tasks
2. Move tasks between columns
3. Refresh the page (F5)

**Expected Result:**
- All tasks remain in their columns
- All task data is preserved
- Activity log is preserved
- Board state is identical

**Status:**  Pass

---

#### Test 4.2: Data Persistence - Browser Close
**Steps:**
1. Create tasks
2. Close browser tab
3. Reopen application (with Remember Me enabled)

**Expected Result:**
- User still logged in
- All tasks preserved
- Board state restored

**Status:**  Pass

---

#### Test 4.3: Reset Board Functionality
**Steps:**
1. Create several tasks and activities
2. Click "Reset Board" button
3. Confirm action

**Expected Result:**
- Confirmation dialog appears
- All tasks are deleted
- Activity log is cleared
- localStorage is cleared
- Empty state messages appear

**Status:**  Pass

---

#### Test 4.4: Handle Empty Storage
**Steps:**
1. Open browser DevTools
2. Go to Application > Local Storage
3. Clear all storage
4. Refresh the page

**Expected Result:**
- Application loads without errors
- Shows empty columns
- No JavaScript errors in console
- Can create new tasks normally

**Status:**  Pass
