/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest';

const config = {
	preset: 'ts-jest',
	testMatch: ['<rootDir>/src/test/**/*.test.ts'],
	modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
	transform: {
		'^.+\\.[tj]sx?$': [
			'ts-jest',
			{
				isolatedModules: true
			},
		],
	},
} as Config;

export default config;