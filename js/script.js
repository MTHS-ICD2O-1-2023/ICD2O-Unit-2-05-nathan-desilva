// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates salary
 */
function calculateSalary () {
  const TAX_RATE = 0.18
  // input
  const hoursWorked = parseInt(document.getElementById('hours-worked').value)
  const hourlyWage = parseInt(document.getElementById('hourly-wage').value)
  const PAY = (hoursWorked * hourlyWage * 1.00 - 0.18)
  const TAXES = ((hoursWorked * hourlyWage) * 0.18)

  
  // process
  const calculateSalary = PAY + TAXES

  // output
  document.getElementById('hours-worked').innerHTML = 'Your pay will be: $ ${calculateSalary.toFixed(2)}`
  document.getElementById('hourly-wage').innerHTML = 'Your pay will be: $' + calculateSalary.toFixed(2)
}
