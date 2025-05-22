-- Add user_type column to users table
ALTER TABLE users ADD COLUMN user_type VARCHAR(20) NOT NULL DEFAULT 'user';

-- Update existing users to have a default user type
UPDATE users SET user_type = 'user' WHERE user_type IS NULL;

-- Add a check constraint to ensure user_type is either 'user' or 'organization'
ALTER TABLE users ADD CONSTRAINT check_user_type 
    CHECK (user_type IN ('user', 'organization')); 