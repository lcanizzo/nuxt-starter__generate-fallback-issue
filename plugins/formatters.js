import Vue from 'vue';

Vue.filter('capitalize', value => value.toUpperCase());

Vue.filter('lowercase', value => value.toLowerCase());

Vue.prototype.$filters = {
  phoneNumber: {
    // ## model -> view
    // ## formats the value when updating the input element
    read: value => {
      let formattedValue = value.trim().split('');

      if (formattedValue.length > 3) {
        if (formattedValue[0] !== '(') formattedValue.unshift('(');

        if (formattedValue.length > 4) {
          if (formattedValue[4] !== ')') formattedValue.splice(4, 0, ')');

          if (formattedValue.length > 5) {
            if (formattedValue[5] !== ' ') formattedValue.splice(5, 0, ' ');

            if (formattedValue.length > 9) {
              if (formattedValue[9] !== '-') formattedValue.splice(9, 0, '-');
              return formattedValue.join('');
            } else return formattedValue.join('');
          } else return formattedValue.join('');
        } else return formattedValue.join('');
      } else return formattedValue.join('');
    },
    // ## view -> model
    // ## formats the value when updating / converting to data
    write: (value, oldVal) => {
      let formattedValue = value.trim().split('');

      if (formattedValue.length > 3) {
        if (formattedValue[0] === '(') formattedValue.splice(0, 1);

        if (formattedValue.length > 4) {
          if (formattedValue[4] === ')') formattedValue.splice(4, 1);

          if (formattedValue.length > 5) {
            if (formattedValue[5] === ' ') formattedValue.splice(5, 1);

            if (formattedValue.length > 9) {
              if (formattedValue[9] === '-') formattedValue.splice(9, 1);
              return formattedValue.join('');
            } else return formattedValue.join('');
          } else return formattedValue.join('');
        } else return formattedValue.join('');
      } else return formattedValue.join('');
    }
  }
};
