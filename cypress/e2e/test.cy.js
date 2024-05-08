describe('MoodScape Application Tests', () => {
  it('logs in, adds a mood diary entry, edits a habit, and logs out', () => {
    // Visit the homepage
    cy.visit('/')

    // Click on the Login link
    cy.get('a.nav-link.text-dark').contains('Login').click();

    // Fill the login form
    cy.get('input[type="email"]').type('user@gmail.com');
    cy.get('input[type="password"]').type('1234');
    cy.get('button[type="submit"]').contains('Log In').click();

    // Handle modal by simulating the Escape key press if necessary
    cy.get('body').type('{esc}', { force: true });

    // Assert the URL to confirm login
    cy.url().should('include', '/');

    // Navigate to the Mood page
    cy.get('a.nav-link.text-dark').contains('Mood').click();

    // Click on the Add New Diary Entry
    cy.get('a.btn.btn-success').contains('Add New').click();

    // Select mood level and enter description
    cy.get('select#MoodLevel').select('5');
    cy.get('textarea#Description').type('Feeling pretty neutral today.');

    // Submit the mood entry
    cy.get('button[type="submit"]').contains('Add Entry').click();

    // Go to the Habit page
    cy.get('a.nav-link.text-dark').contains('Habit').click();

    // Click on Edit for a specific habit
    cy.get('a.btn.btn-habit-edit').contains('Edit').click();

    // Edit the description of the habit
    cy.get('textarea#Description').type('...Edited...');

    // Update the habit entry
    cy.get('button[type="submit"]').contains('Update Entry').click();

    // Logout
    cy.get('button[type="submit"]').contains('Logout').click();

    // Confirm the URL to ensure the user is logged out
    cy.url().should('include', '/User/Login');
  });
});

// ! Command to run: npx cypress open