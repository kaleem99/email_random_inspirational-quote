let {helpOptions, transporter} = require('../src/email');

describe("Sender", function(){
    it('should spy on mail options function', function() {
        helpOptions = jasmine.createSpy('helpOptions');
        helpOptions();
        expect(helpOptions).toHaveBeenCalled();
    });
    it("should spy on transort for email", function(){
        transport = jasmine.createSpy('transport');
        transport();
        expect(transport).toHaveBeenCalled();
    })
    it('should check if function HelpOption exists', function(){
        expect(helpOptions).toBeDefined();
    })
    it('should check if function transporter exists', function(){
        expect(transporter).toBeDefined();
    })
})