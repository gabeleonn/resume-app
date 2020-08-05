import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  fetchInfo: [null],
  ptInfo: ['data'],
  enInfo: ['data'],
});

export default Creators;
