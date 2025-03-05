document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');

    document.getElementById('students-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Students</h1>
            <form>
                       <label>
                    <input type="radio" name="student-option" value="courses">
                    Courses
                </label><br>
                <label>
                    <input type="radio" name="student-option" value="class-schedule">
                    Class Schedule
                </label><br>
                <label>
                    <input type="radio" name="student-option" value="assignments">
                    Assignments
                </label><br>
                <label>
                    <input type="radio" name="student-option" value="student-clearance">
                    Student Clearance
                </label><br>
                <label>
                    <input type="radio" name="student-option" value="grades">
                    Grades
                </label><br>
                <label>
                    <input type="radio" name="student-option" value="results">
                    Results
                </label>
            </form>
        `;
    });
    

    document.getElementById('financials-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Financials</h1>
            <form.
                   <label>
                    <input type="radio" name="fancials-option" value="fee structure">
                    fee structure
                </label><br>
                <label>
                    <input type="radio" name="financial-option" value="fee payment">
                      fee payments
                </label><br>
                <label>
                    <input type="radio" name="financial-option" value="scholarship ">
                    Scholarships
                </label><br>
                <label>
                    <input type="radio" name="financial-option" value="penalties">
                   penalties
                </label><br>
                <label>
                    <input type="radio" name="financial-option" value="receipts">
                    Receits
                </label><br>
                <label>
                    <input type="radio" name="financial-option" value="refunds">
                    Refumds
                </label>
            </form>
        `;
    });

    document.getElementById('academics-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Academics</h1>
                       <form>
                <label>
                    <input type="radio" name="academics-option" value="credits">
                    Credits
                </label><br>
                <label>
                    <input type="radio" name="academics-option" value="resits">
                    Resits
            </form>
        `;
    });

    document.getElementById('downloads-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Downloads</h1>
                       <form>
                <label>
                    <input type="radio" name="downloads-option" value="receipt">
                    Reciept
                </label><br>
                <label>
                    <input type="radio" name="downloads-option" value="Fee structure">
                    Fee structure
                </label><br>
                <label>
                    <input type="radio" name="downloads-option" value="results slips">
                    Results slips
                </label>
            </form>
        `;
    });
    document.getElementById('transfer-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Inter-school Transfer</h1>  
            <form>         
            <label>
                    <input type="radio" name="transfer-option" value="courses">
                    Courses
                </label><br>
                </form>
        `;
    });

    document.getElementById('settings-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Settings</h1>
                   <form>
                <label>
                    <input type="radio" name="settingds-option" value="pasword">
                    change password
                </label><br>
                </form>
        
        `;
    });

    document.getElementById('evaluation-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Lecturer's Evaluation</h1>
            <Form>
                       <label>
                    <input type="radio" name="evaluation-option" value="name">
                    name of the lecturer
                </label><br>
               </Form> 
        `;
    });

    document.getElementById('election-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Msu-Election</h1>
            <form>
                       <label>
                    <input type="radio" name="election-option" value="vote">
                    Vote
                </label><br>
            </form>
    

        `;
    });

    document.getElementById('logout-link').addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = `
            <h1>Logout</h1>
            <p>You have been logged out.</p>
            <!-- Add more content as needed -->
        `;
    });
});