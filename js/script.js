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

  
  // process
  const pay = (hoursWorked * hourlyWage * 1.00 - TAX_RATE)
  const taxes = ((hoursWorked * hourlyWage) * TAX_RATE)
  const calculateSalary = pay + taxes

  // output
  document.getElementById('salary').innerHTML = 'Your pay will be: $ ${calculateSalary.toFixed(2)}'
  document.getElementById('salary').innerHTML = 'Your pay will be: $' + calculateSalary.toFixed(2)
}
