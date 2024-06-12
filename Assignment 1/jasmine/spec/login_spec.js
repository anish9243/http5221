describe("Check Login Tests", function() {
    it("should return 'No Username Entered.' when Username is Empty", function() {
        expect(checkLogin('', 'password')).toBe('No Username Entered.');
    });

    it("should return 'No Password Entered.' when Password is empty", function() {
        expect(checkLogin('username', '')).toBe('No Password Entered.');
    });

    it("should return 'Invalid Username or Password.' for incorrect credentials", function() {
        expect(checkLogin('Anish123', 'password')).toBe('Invalid Username or Password.');
    });

    it("should return true for correct Username and Password", function() {
        expect(checkLogin('anish098', 'anish123')).toBe(true);
    });
});

describe("MD5 Tests", function() {
    it("should encrypt a string using MD5", function() {
        var password = md5Encrypt('anish123');
        expect(password).toMatch(/^[a-f0-9]{32}$/);
        expect(password).toBe('87757270c86d517698777aeba4273838');
    });    
});    
    
