import React from 'react';
import './Lexeme.scss';
import * as Dictionary from './dictionary.ts';

interface LexemeProps {
    lexeme : Dictionary.Lexeme
};

const Lexeme = ({ lexeme } : LexemeProps) => {
  return (
    <div className="Lexeme">
      <div className="Word">{lexeme.word}</div>
      { lexeme.note && <div className="Note">({lexeme.note})</div> }

      <div className="Translation">{lexeme.translation}</div>
    </div>
  );
};

export default Lexeme;