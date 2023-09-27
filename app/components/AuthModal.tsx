'use client'

import { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AuthModalInputs from './AuthModalInputs'
import useAuth from '../../hooks/useAuth'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export default function AuthModal({ isSingin }: { isSingin: boolean }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { signin } = useAuth()

  const renderContent = (signinContent: string, singupContent: string) => {
    return isSingin ? signinContent : singupContent
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  })

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (isSingin) {
      if (inputs.password && inputs.email) {
        return setDisabled(false)
      }
    } else {
      if (
        inputs.firstName &&
        inputs.email &&
        inputs.firstName &&
        inputs.lastName &&
        inputs.password &&
        inputs.phone
      ) {
        return setDisabled(false)
      }
    }

    setDisabled(true)
  }, [inputs])

  const handleClick = () => {
    if (isSingin) {
      signin({ email: inputs.email, password: inputs.password })
    }
  }

  return (
    <div>
      <button
        className={`${renderContent(
          'bg-blue-400 text-white',
          ''
        )} border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {renderContent('Sing in', 'Sign up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {renderContent('Sign In', 'Create Account')}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {renderContent(
                  'Log Into Your Account',
                  'Create Your OpenTable Account'
                )}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                isSingin={isSingin}
              />
              <button
                className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                disabled={disabled}
                onClick={handleClick}
              >
                {renderContent('Sing In', 'Create Account')}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
