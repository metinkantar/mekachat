import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../redux/counterSlice';

const Counter = () => {
    const count = useSelector(selectCount);

    return (
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-3">
            <p className="h1 fw-bold text-center">Counter App</p>
          </div>
        </div>
        <hr className="fw-bold"/>
        <div class="row justify-content-center">
          <div class="col-2">
            <p className="h1 fw-bold text-center">{count}</p>
          </div>
        </div>
      </div>
    );
}

export default Counter;