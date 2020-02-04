// Check yourself here: http://www.morpher.ru/SummaPro.aspx
import { pluralize } from 'numeralize-ru';

export const WORDS = {
  AGE: {
    NOMINATIVE: ['год', 'года', 'лет'],
    GENITIVE: ['года', 'лет', 'лет'],
    DATIVE: ['году', 'годам', 'годам'],
    ACCUSATIVE: ['год', 'года', 'лет'],
    INSTRUMENTAL: ['годом', 'годами', 'годами'],
    PREPOSITIONAL: ['годе', 'годах', 'годах']
  }
};

export default function(count, words) {
  return pluralize(count, ...words);
}
