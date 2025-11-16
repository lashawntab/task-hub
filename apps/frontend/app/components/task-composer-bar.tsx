'use client';

import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

export default function TaskComposerBar() {

  const ValidationSchema = z.object({
    description: z.string().nonempty({ message: "Please provide a task description." }).trim()
  });

  type ValidationData = z.infer<typeof ValidationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationData>({
    resolver: zodResolver(ValidationSchema),
  });
  
  const onSubmit = (data: ValidationData) => {
    console.log('Data:', data);
    createTask(data.description);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-4">
        <form onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-row items-center gap-4 bg-[#2a2522] rounded-lg p-4 border border-[#3a3532] ${errors.description ? "border-red-800" : ""}`}>
          <input
            type="text"
            placeholder="Break it down for me..."
            {...register('description')}
            className="flex-1 bg-transparent text-white placeholder:text-gray-400 outline-none border-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#FE7A03] text-white rounded-md hover:bg-[#E66A00] transition-colors font-medium">
            Add task
          </button>
        </form>
        {errors.description && <p>{errors.description.message}</p>}
      </div>
    </div>
  );
}

function createTask (description: string) : string {
  console.log(description);
  return '';
}
