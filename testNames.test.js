it('should get the name from a StringLiteral', () => {});

it(`should get the name from a simple TemplateLiteral`, () => {});

// it should get the name from an empty TemplateLiteral
it(``, () => {});

it(`should get the name from a TemplateLiteral with an ${() => 'embedded expression'}`, () => {});

it(`${'should'} get the name from a ${'TemplateLiteral'} with ${'many'} expressions`, () => {});
