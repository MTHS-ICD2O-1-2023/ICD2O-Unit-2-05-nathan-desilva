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
  const hoursWorked = parseFloat(document.getElementById('hours-worked').value)
  const hourlyWage = parseFloat(document.getElementById('hourly-wage').value)

  
  // process
  console.log(hoursWorked)
  console.log(hourlyWage)
  const pay = (hoursWorked * hourlyWage * (1.00 - TAX_RATE))
  const taxes = ((hoursWorked * hourlyWage) * TAX_RATE)

  // output
  document.getElementById('salary').innerHTML = 'Your pay will be: $ ${pay.toFixed(2)}'
  document.getElementById('salary').innerHTML = 'Your pay will be: $' + pay.toFixed(2)
  document.getElementById('government').innerHTML = 'The government will take: $ ${taxes.toFixed(2)}'
  document.getElementById('government').innerHTML = 'The government will take: $' + taxes.toFixed(2)
}
