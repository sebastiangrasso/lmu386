  const {
    change, stripQuotes, scramble, say, powers, interleave,
    powersGenerator, cylinder, makeCryptoFunctions, randomName,
  } = require('../warmup');

  // Helper for the scramble tests
  function anagramsOfEachOther(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
  }

  // Helper for testing the callbacky problems
  function generatorToArray(generator, ...args) {
    const result = [];
    generator(...args, (item) => result.push(item));
    return result;
  }

  describe('change', () => {
    it('handles zero', () => {
      expect(change(0)).toEqual([0, 0, 0, 0]);
    });

    it('computes answers for small integer values fine', () => {
      expect(change(97)).toEqual([3, 2, 0, 2]);
      expect(change(8)).toEqual([0, 0, 1, 3]);
      expect(change(250)).toEqual([10, 0, 0, 0]);
      expect(change(144)).toEqual([5, 1, 1, 4]);
      expect(change(97)).toEqual([3, 2, 0, 2]);
    });

    it('handles large values', () => {
      // This test only passes if the solution is efficient
      expect(change(100000000000)).toEqual([4000000000, 0, 0, 0]);
    });

    it('throws the proper exception for negative arguments', () => {
      expect(() => change(-50)).toThrow(RangeError);
    });
  });

  describe('stripQuotes', () => {
    it('works on the empty string', () => {
      expect(stripQuotes('')).toEqual('');
    });

    it('strips quotes properly for non-empty strings', () => {
      expect(stripQuotes('Hello, world')).toEqual('Hello, world');
      expect(stripQuotes('"\'')).toEqual('');
      expect(stripQuotes('a"""\'\'"z')).toEqual('az');
    });
  });

  describe('scramble', () => {
    it('scrambles properly', () => {
      ['a', 'rat', 'JavaScript testing', '', 'zzz', '^*^*)^▱ÄÈËɡɳɷ'].forEach((s) => {
        expect(anagramsOfEachOther(s, scramble(s))).toBeTruthy();
      });
    });

    it('is really random (produces all permutations)', () => {
      const possibilities = new Set('ABC ACB BAC BCA CAB CBA'.split(' '));
      for (let i = 0; i < 200; i += 1) {
        possibilities.delete(scramble('ABC'));
      }
      expect(possibilities.size).toBe(0);
    });
  });

  describe('say', () => {
    it('works when there are no words', () => {
      expect(say()).toBe('');
    });

    it('works when there are words', () => {
      expect(say('hi')()).toBe('hi');
      expect(say('hi')('there')()).toBe('hi there');
      expect(say('hello')('my')('name')('is')('Colette')()).toBe('hello my name is Colette');
    });
  });

  describe('powers', () => {
    it('generates sequences of powers properly', () => {
      expect(generatorToArray(powers, 2, -5)).toEqual([]);
      expect(generatorToArray(powers, 7, 0)).toEqual([]);
      expect(generatorToArray(powers, 3, 1)).toEqual([1]);
      expect(generatorToArray(powers, 2, 63)).toEqual([1, 2, 4, 8, 16, 32]);
      expect(generatorToArray(powers, 2, 64)).toEqual([1, 2, 4, 8, 16, 32, 64]);
    });
  });

  describe('The powers generator', () => {
    it('works as expected', () => {
      const g1 = powersGenerator(2, 1);
      expect(g1.next()).toEqual({ value: 1, done: false });
      expect(g1.next()).toEqual({ value: undefined, done: true });
      const g2 = powersGenerator(3, 100);
      expect(g2.next()).toEqual({ value: 1, done: false });
      expect(g2.next()).toEqual({ value: 3, done: false });
      expect(g2.next()).toEqual({ value: 9, done: false });
      expect(g2.next()).toEqual({ value: 27, done: false });
      expect(g2.next()).toEqual({ value: 81, done: false });
      expect(g2.next()).toEqual({ value: undefined, done: true });
    });
  });

  describe('interleave', () => {
    it('interleaves properly', () => {
      expect(interleave([])).toEqual([]);
      expect(interleave([1, 4, 6])).toEqual([1, 4, 6]);
      expect(interleave([], 2, 3)).toEqual([2, 3]);
      expect(interleave([1], 9)).toEqual([1, 9]);
      expect(interleave([8, 8, 3, 9], 1)).toEqual([8, 1, 8, 3, 9]);
      expect(interleave([2], 7, '8', {})).toEqual([2, 7, '8', {}]);
    });
  });

  describe('The cylinder function', () => {
    it('makes a cylinder from both arguments', () => {
      const c = cylinder({ radius: 10, height: 5 });
      expect(c.height).toBe(5);
      expect(c.radius).toBe(10);
    });
    it('defaults the radius to 1', () => {
      const c = cylinder({ height: 5 });
      expect(c.height).toBe(5);
      expect(c.radius).toBe(1);
    });
    it('defaults the height to 1', () => {
      const c = cylinder({ radius: 5 });
      expect(c.height).toBe(1);
      expect(c.radius).toBe(5);
    });
    it('accepts an empty object', () => {
      const c = cylinder({});
      expect(c.height).toBe(1);
      expect(c.radius).toBe(1);
    });
    it('computes volumes and surface areas correctly', () => {
      const c = cylinder({ radius: 2, height: 10 });
      expect(c.volume()).toBeCloseTo(40 * Math.PI, 0.000001);
      expect(c.surfaceArea()).toBeCloseTo(48 * Math.PI, 0.000001);
    });
    it('mutates with stretch and widen', () => {
      const c = cylinder({ radius: 2, height: 10 });
      c.widen(3);
      expect(c.radius).toBe(6);
      c.stretch(2);
      expect(c.height).toBe(20);
    });
    it('changes volumes after stretch and widen', () => {
      const c = cylinder({ radius: 2, height: 10 });
      c.widen(3);
      expect(c.volume()).toBeCloseTo(360 * Math.PI, 0.000001);
      c.stretch(2);
      expect(c.volume()).toBeCloseTo(720 * Math.PI, 0.000001);
    });
    it('has an immutable radius field', () => {
      const c = cylinder({ radius: 2, height: 10 });
      c.radius = 100;
      expect(c.radius).toBe(2);
    });
    it('has an immutable height field', () => {
      const c = cylinder({ radius: 2, height: 10 });
      c.height = 100;
      expect(c.height).toBe(10);
    });
  });

  describe('crypto functions', () => {
    it('encrypt and decrypt okay', () => {
      const [e, d] = makeCryptoFunctions('super dog', 'aes-256-cbc');
      expect(e('Hello world')).toEqual('9714236cbedfd8d9799acea4ea79e6fe');
      expect(d('9714236cbedfd8d9799acea4ea79e6fe')).toEqual('Hello world');
      ['', 'abc', 'zπøj#•¶å≈’’'].forEach((s) => expect(d(e(s))).toBe(s));
    });
    it('throws an error for an unknown algorithm', () => {
      expect(() => makeCryptoFunctions('super dog', 'asdf*')[0]('Hello')).toThrow('Unknown cipher');
    });
  });

  describe('The random name function', () => {
    it('returns a promise, anyway', () => {
      const p = randomName({ gender: 'female', region: 'canada' });
      expect('then' in p).toBeTruthy();
    });
    it('produces a resolved promise with a name and surname', (done) => {
      randomName({ gender: 'female', region: 'canada' }).then((name) => {
        // You might try: console.log(name); // eslint-disable-line no-console
        expect(name.length).toBeGreaterThan(3);
        expect(name).toContain(' ');
      }).then(done, done);
    });
    it('produces a rejected promise for an unknown gender', (done) => {
      randomName({ gender: 'fefwefemale', region: 'canada' }).catch((error) => {
        expect(error.message.startsWith('400')).toBeTruthy();
      }).then(done, done);
    });
  });
