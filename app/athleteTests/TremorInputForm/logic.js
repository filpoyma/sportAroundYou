import { createLogic } from 'redux-logic';

import { ROUTE } from '@/pages/Root/constants';
import { replaceTest } from '@/pages/TestPage/actions';
import { makeSelectPersonId } from '@/pages/TestPage/selectors';

import { TREMOR_SAVE, TREMOR_SAVE_ERROR, TREMOR_SAVE_SUCCESS } from './constants';

export const saveForm = createLogic({
  type: TREMOR_SAVE,
  latest: true,
  processOptions: {
    dispatchReturn: true,
    failType: TREMOR_SAVE_ERROR
  },
  process(
    {
      action: { inputValues },
      getState,
      request
    },
    dispatch,
    done
  ) {
    const personId = makeSelectPersonId()(getState());

    const Gquery = `
    mutation CreateTestTremorDynamic ( 
        $PersonId : Int!, 
        $DurBefore: Int!,
        $TouchBefore: Int!,
        $DurAfter30: Int!,
        $TouchAfter30: Int!,
        $HeartAfter30Start: Int,
        $HeartAfter30End: Int,
        $DurAfter150: Int!,
        $TouchAfter150: Int!,
        $HeartAfter150Start: Int,
        $HeartAfter150End: Int,
        $DurAverage: Int,
      ) {
      createTestTremorDynamic (
        personId : $PersonId,
        durBefore : $DurBefore,
        touchBefore : $TouchBefore,
        durAfter30 : $DurAfter30,
        touchAfter30 : $TouchAfter30,
        heartAfter30Start : $HeartAfter30Start,
        heartAfter30End : $HeartAfter30End,
        durAfter150 : $DurAfter150,
        touchAfter150 : $TouchAfter150,
        heartAfter150Start : $HeartAfter150Start,
        heartAfter150End : $HeartAfter150End,
        durAverage : $DurAverage
      ) {
        personId
      }
    }
    `;

    return request(`https://dlab-api.sosportom.ru/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: Gquery,
        variables: {
          PersonId: personId,

          DurBefore: inputValues[1],
          TouchBefore: inputValues[2],
          DurAfter30: inputValues[3],
          TouchAfter30: inputValues[4],
          HeartAfter30Start: inputValues[5],
          HeartAfter30End: inputValues[6],
          DurAfter150: inputValues[7],
          TouchAfter150: inputValues[8],
          HeartAfter150Start: inputValues[9],
          HeartAfter150End: inputValues[10],
          DurAverage: inputValues[11]

        }
      })
    }).then(() => {
      dispatch({
        type: TREMOR_SAVE_SUCCESS
      });

      dispatch(replaceTest(ROUTE.TEST.TREMOR));

      done();
    });
  }
});

export default [saveForm];
