test( 'Basic tests', function () {
    deepEqual( fuzzytime.relative( 0 ), 'now', 'now' );
    deepEqual( fuzzytime.relative( 700 ), '700 milliseconds', 'less than a second' );
});

test( 'Simple relative 1 unit', function () {
    deepEqual( fuzzytime.relative( 1 ), '1 millisecond', 'millisecond' );
    deepEqual( fuzzytime.relative( 1000 ), '1 second', 'second' );
    deepEqual( fuzzytime.relative( 60000 ), '1 minute', 'minute' );
    deepEqual( fuzzytime.relative( 3600000 ), '1 hour', 'hour' );
    deepEqual( fuzzytime.relative( 86400000 ), '1 day', 'day' );
    deepEqual( fuzzytime.relative( 604800000 ), '1 week', 'week' );
    deepEqual( fuzzytime.relative( 2592000000 ), '1 month', 'month' );
    deepEqual( fuzzytime.relative( 31556925993 ), '1 year', 'year' );
    deepEqual( fuzzytime.relative( 315569259930 ), '1 decade', 'decade' );
    deepEqual( fuzzytime.relative( 3155692599300 ), '1 century', 'century' );
    deepEqual( fuzzytime.relative( 31556925993000 ), '1 millennium', 'millennium' );
});

test( 'Simple relative 2 units', function () {
    deepEqual( fuzzytime.relative( 2 * 1), '2 milliseconds', 'millisecond' );
    deepEqual( fuzzytime.relative( 2 * 1000 ), '2 seconds', 'second' );
    deepEqual( fuzzytime.relative( 2 * 60000 ), '2 minutes', 'minute' );
    deepEqual( fuzzytime.relative( 2 * 3600000 ), '2 hours', 'hour' );
    deepEqual( fuzzytime.relative( 2 * 86400000 ), '2 days', 'day' );
    deepEqual( fuzzytime.relative( 2 * 604800000 ), '2 weeks', 'week' );
    deepEqual( fuzzytime.relative( 2 * 2592000000 ), '2 months', 'month' );
    deepEqual( fuzzytime.relative( 2 * 31556925993 ), '2 years', 'year' );
    deepEqual( fuzzytime.relative( 2 * 315569259930 ), '2 decades', 'decade' );
    deepEqual( fuzzytime.relative( 2 * 3155692599300 ), '2 centuries', 'century' );
    deepEqual( fuzzytime.relative( 2 * 31556925993000 ), '2 millennia', 'millennia' );
});

test( 'Simple relative multi units', function () {
    deepEqual( fuzzytime.relative( 2 * 1000 + 1 ), '2 seconds and 1 millisecond', 'second' );
    deepEqual( fuzzytime.relative( 3 * 60000 + 5 * 1000 ), '3 minutes and 5 seconds', 'minute' );
    deepEqual( fuzzytime.relative( 4 * 3600000 + 9 * 60000 ), '4 hours and 9 minutes', 'hour' );
    deepEqual( fuzzytime.relative( 5 * 86400000 + 8 * 3600000 ), '5 days and 8 hours', 'day' );
    deepEqual( fuzzytime.relative( 1 * 604800000 + 3 * 86400000 ), '1 week and 3 days', 'week' );
    deepEqual( fuzzytime.relative( 7 * 2592000000 + 2 * 604800000 ), '7 months and 2 weeks', 'month' );
    deepEqual( fuzzytime.relative( 8 * 31556925993 + 5 * 2592000000 ), '8 years and 5 months', 'year' );
    deepEqual( fuzzytime.relative( 9 * 315569259930 + 4 * 31556925993 ), '9 decades and 4 years', 'decade' );
    deepEqual( fuzzytime.relative( 9 * 3155692599300 + 3 * 315569259930 ), '9 centuries and 3 decades', 'century' );
    deepEqual( fuzzytime.relative( 9 * 31556925993000 + 2 * 3155692599300 ), '9 millennia and 2 centuries', 'millennia' );
});
