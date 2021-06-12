## Source code testing
* Modern alternative to testing pyramid - [testing trophy](https://www.tbray.org/ongoing/When/202x/2021/05/15/Testing-in-2021)
* Tests should run quickly
* There’s no room for testing religions; do what makes sense.

#### Unit tests
* Good and bad unit tests:
    * When method takes input and produces output, with no side effects - unit tests are gread
    * If tests require multiple mocks/spies/stubs - unit tests are bad
        * Use higher level of abstraction (system/integration tests)
* Unit tests as documentation (method usage example)
* They provide ability to refactor easily. No need to run project and test manually.  
* Provide ability to experiment - jump into tests, change a couple of parameters/lines, see what happens.

