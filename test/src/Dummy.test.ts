import { PrimeFacts } from '../../src/Dummy'

describe("Prime Factorization", () => {
    it("should be same as prime factors of 2 ", () => {
        const dummyOutputReturned: number[] = PrimeFacts(2)
        expect(dummyOutputReturned).toEqual([2])
    })
    it("should be same as prime factors of 4 ", () => {
            const dummyOutputReturned: number[] = PrimeFacts(4)
            expect(dummyOutputReturned).toEqual([2,2])
        })

     it("should be same as prime factors of 8 ", () => {
                const dummyOutputReturned: number[] = PrimeFacts(8)
                expect(dummyOutputReturned).toEqual([2,2,2])
     })

     it("should be same as prime factors of 25 ", () => {
                     const dummyOutputReturned: number[] = PrimeFacts(25)
                     expect(dummyOutputReturned).toEqual([5,5])
     })

     it("should be same as prime factors of 14 ", () => {
                          const dummyOutputReturned: number[] = PrimeFacts(14)
                          expect(dummyOutputReturned).toEqual([2,7])
          })
})