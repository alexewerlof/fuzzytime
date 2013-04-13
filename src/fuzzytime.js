;
(function () {

    var now = 'now';
    var and = 'and';

    var RELATIVE = [
        {
            n : 1,
            shortunit : 'ms',
            singleunit : 'millisecond',
            pluralunit : 'milliseconds'
        },
        {
            n : 1000,
            shortunit : 'sec',
            singleunit : 'second',
            pluralunit : 'seconds'
        },
        {
            n : 60000,
            shortunit : 'min',
            singleunit : 'minute',
            pluralunit : 'minutes'
        },
        {
            n : 3600000,
            shortunit : 'hr',
            singleunit : 'hour',
            pluralunit : 'hours'
        },
        {
            n : 86400000,
            shortunit : 'd',
            singleunit : 'day',
            pluralunit : 'days'
        },
        {
            n : 604800000,
            shortunit : 'w',
            singleunit : 'week',
            pluralunit : 'weeks'
        },
        {
            n : 2592000000,
            shortunit : 'mon',
            singleunit : 'month',
            pluralunit : 'months'
        },
        {
            n : 31556925993,
            shortunit : 'yr',
            singleunit : 'year',
            pluralunit : 'years'
        },
        {
            n : 315569259930,
            shortunit : 'dec',
            singleunit : 'decade',
            pluralunit : 'decades'
        },
        {
            n : 3155692599300,
            shortunit : 'cen',
            singleunit : 'century',
            pluralunit : 'centuries'
        },
        {
            n : 31556925993000,
            shortunit : 'mil',
            singleunit : 'millennium',
            pluralunit : 'millennia'
        }
    ];
    /**
     * Converts a time value that represents remaining time to a nice human readable format
     * @param val {number} the time value
     */
    function relative ( val, shortunit ) {

        /* a flag that is set if the val is negative */
        var ago = false;
        if ( val === 0 ) {
            return now;
        } else if ( val < 0 ) {
            ago = true;
            val = -val;
        }

        var i = 2;
        while ( i < RELATIVE.length && RELATIVE[ i ].n <= val ) {
            i++;
        }

        i--;
        var r1 = RELATIVE[ i - 1 ];
        var r2 = RELATIVE[ i ];
        var u2 = Math.floor( val / r2.n );
        var u1 = Math.round( 10 * ( val - u2 * r2.n ) / r1.n ) / 10;
        var ret = '';
        if ( u2 ) {
            if ( shortunit ) {
                ret += u2 + ' ' + r2.shortunit;
            } else {
                ret += u2 + ' ' + ( u2 == 1 ? r2.singleunit : r2.pluralunit );
            }
            if ( u1 ) {
                ret += ' ' + and + ' ';
            }
        }
        if ( u1 ) {
            if ( shortunit ) {
                ret += u1 + ' ' + r1.shortunit;
            } else {
                ret += u1 + ' ' + ( u1 == 1 ? r1.singleunit : r1.pluralunit );
            }
        }
        return ret;
    }

    function absolute () {

    }

    if ( typeof define === 'function' ) {
        define( [], {
            relative : relative,
            absolute : absolute
        });
    } else {
        window.fuzzytime = {
            relative : relative,
            absolute : absolute
        };
    }
})();